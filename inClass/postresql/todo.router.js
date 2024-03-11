const express = require("express");
const Todo  = require("./todo.model")
const router = express.Router();
router
  .get("/", async (req, res) => {
    //const data = await Todo.findAll()
    const data = await Todo.findAndCountAll();
    res.status(200).send({
      error: false,
      result: data,
    });
  })
  .post("/", async (req, res) => {
    console.log(req.body);
    const receivedData = req.body;
    const data = await Todo.create({
      title: receivedData.title,
      description: receivedData.description,
      priority: receivedData.priority,
      isDone: receivedData.isDone,
    });
    res.status(201).send({
      error: false,
      result: data.dataValues,
    });
  })
  .get("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await Todo.findOne({ where: { id: id } });
    //const datas = await Todo.findByPk(req.params.id);
    res.status(200).send({
      error: false,
      result: data.dataValues,
    });
  })
  .put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = Todo.update(req.body, { where: { id: id } });
    res.status(202).send({
      error: false,
      messages: "Updated",
      //body:req.body,
      //result:data,
      new: await Todo.findByPk(req.params.id),
      //new:await Todo.findOne({ where: {id:id} })
    });
  })
  .delete("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Todo.destroy({ where: { id: id } });
    // res.status(204).send({
    //     error: false,
    //     messages:"Deleted",
    //     result:data

    //   });
    console.log(data);
    if (data > 0) res.sendStatus(204);
    else {
      res.errorStatusCode = 404;
      throw new Error ('not Found')
    }
    //   res.status(404).send({
    //     error: true,
    //     messages: "kayıt Bulunamadı",
    //   });
  });

  module.exports=router