const express = require('express')
const router = express.Router()
const ideas = [
  {
    id: 1,
    text: 'Please add a dark mode button',
    tag: 'technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'We need more tutorials on AI',
    tag: 'education',
    username: 'BruceBanner',
    date: '2023-01-02',
  },
  {
    id: 3,
    text: 'Free coffee for all developers',
    tag: 'lifestyle',
    username: 'PeterParker',
    date: '2023-01-02',
  },
];
//get all ideas
router.get('/',(req,res) =>{
  res.json({success: true ,data: ideas })
})
// get a single idea 
router.get('/:id',(req,res) =>{
  const idea = ideas.find((idea) => idea.id === +req.params.id)

  if(!idea){
    return res.status(404).json({ success: false , error: 'Resource not found'})
  }
  res.json({success: true ,data: idea })
})


module.exports = router