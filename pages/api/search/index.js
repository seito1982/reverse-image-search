// const reverseImageSearch = require('node-reverse-image-search')
const reverseImageSearch = require('reverse-image-search-google')

export const config = {
    api: {
       sizeLimit: '1mb'
    }
};
 
export default async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            res.status(405).send({ message: 'Only POST requests allowed' })
            return
        }
        let uri = req.body.uri;
        console.log(uri);

        const doSomething = (results) => {
            console.log(results)
            res.status(200).json({message: 'Success', results: results})
        }

        reverseImageSearch(uri, doSomething)
        // reverseImageSearch('https://infernaco.com/demo/img/cover/06.jpg', doSomething)
        // reverseImageSearch('https://drive.google.com/file/d/1bdlGdeKr10QlYyURd19gZkCdvt4YpCso/view?usp=sharing', doSomething)
        // reverseImageSearch('i.ebayimg.com/00/s/OTAwWDkwMA==/z/3G8AAOSwzoxd80XB/$_83.JPG', doSomething)
        // reverseImageSearch('https://cdn.discordapp.com/attachments/494223131683061763/868615421362839583/91403647_p0_master1200.png', doSomething)
    })
}