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
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            console.log(fields, files)
            console.log(files.file.filepath)

            var oldPath = files.file.filepath
            var newPath = `./public/upload/${files.file.originalFilename}`;
            // var newPath = `/Volumes/LocalDisk/work/04_reverse_image_search/${files.file.originalFilename}`
            // mv(oldPath, newPath, function(err) { console.log(err)} )

            var readStream=fs.createReadStream(oldPath);
            var writeStream=fs.createWriteStream(newPath);
            readStream.pipe(writeStream);
            readStream.on('end',function(){
            fs.unlinkSync(oldPath);
            });

            res.status(200).json({ fields, files })
        })
    })
    
}