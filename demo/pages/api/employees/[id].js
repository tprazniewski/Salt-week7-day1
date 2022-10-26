// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }
  
  export default (req,res) => {
    const {id} = req.query
    
    console.log(req.method)
    if(req.method != 'GET'){
        res.status(405).send('Method not allowed')
    }
    res.status(200).json({id ,name: "Tomasz"})
  }