import { IncomingForm } from 'formidable'
// import { promises as fs } from 'fs'

const fs = require("fs");
const mv = require('mv');

export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async (req, res) => {

    var dir = './public/upload';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    // const data = await new Promise((resolve, reject) => 
    {
       const form = new IncomingForm()
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            // console.log(fields, files)
            // console.log(files.file.filepath)

            var oldPath = files.file.filepath
            var newPath = `./public/upload/${files.file.originalFilename}`;

            //- create the temporary filesystem and hand it over to the new file on the public
            var readStream = fs.createReadStream(oldPath);
            var writeStream = fs.createWriteStream(newPath);
            readStream.pipe(writeStream);
            readStream.on('end',function(){
                fs.unlinkSync(oldPath);
            });
            res.status(200).json({ fields, files })
        })
    }
    // )
    
}