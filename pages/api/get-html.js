// pages/api/get-html.js

export default (req, res) => {
  if(req.method ==='POST')
  {
    const fileName = req.body;
    console.log(fileName);
    const htmlUrl = fileName; // Specify the URL path to your HTML file
    res.status(200).json({ htmlUrl });
  }
   
  };
  