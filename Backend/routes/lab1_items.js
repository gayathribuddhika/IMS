const express = require("express")
const router = express.Router()
const cors = require("cors")

const Item = require("../models/lab1_item")
router.use(cors())

router.get('/lab1', (req, res) => {
    Item.find(function (err, items) {
        if (err) {
            res.json(err);
        }
        res.json(items);
    });
});

router.post('/lab1', function (req, res) {
    let item = new Item(req.body);
    item.save()
        .then(() => {
            res.status(200).send('Record is saved Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save to database");
        });
});

router.delete('/lab1/delete/:id', function (req, res) {
    Item.findOneAndDelete({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

router.get('/lab1/edit/:id', function (req, res) {
    let id = req.params.id;
    Item.findById(id, function (err, item) {
        if (err) {
            res.json(err);
        }
        res.json(item);
    });
});

router.post('/lab1/update/:id', function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        if (!item)
            res.status(404).send("Record is not found");
        else {
            item.Main_Category = req.body.Main_Category;
            item.Asset_Description = req.body.Asset_Description;
            item.Serial_Num = req.body.Serial_Num;
            item.Asset_Code = req.body.Asset_Code;
            item.Qty = req.body.Qty;
            item.Make = req.body.Make;
            item.Condition = req.body.Condition;
            item.Comments = req.body.Comments;
            item.save().then(() => {
                res.json('Update is Completed');
            })
                .catch(() => {
                    res.status(400).send("Unable to update the DB");
                });
        }
    });
});

module.exports = router;
