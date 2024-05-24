/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTarray = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _description, _image, _attributes, _external_url) {
  const NFTmetadata = {
    name: _name,
    description: _description,
    image: _image,
    attributes: _attributes,
    external_url: _external_url
  }
  NFTarray.push(NFTmetadata);
  console.log(_name+" minted successfully!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (let i = 0; i < NFTarray.length; i++) {
    console.log("\nNFT #" + (i + 1));
    console.log("Name: \t\t" + NFTarray[i].name);
    console.log("Description: \t" + NFTarray[i].description);
    console.log("Image: \t\t" + NFTarray[i].image);
    console.log("Attributes: \t" + NFTarray[i].attributes);
    console.log("External URL: \t" + NFTarray[i].external_url);
  }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal number of NFTs minted: " + NFTarray.length);
}

// call your functions below this line
mintNFT("JazzMonkey", "Monkey playing jazz", "jazzmonkey.jpg", "rare", "https://www.monkeywithjazz.com");
mintNFT("SassyCat", "Cat who is sassy", "sascat.jpg", "epic", "https://www.sascat.com");
mintNFT("BlueGiant", "Like a smurf but bigger", "blugiant.jpg", "attributes3", "https://www.bluegiant.com");
listNFTs();
getTotalSupply();
