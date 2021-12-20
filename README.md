# KickCoin

## Ethereum-Kickstarter Clone

<br />

  <p align="center">
  KickCoin is a kickstarter clone that allows contributors to participate in the allocation of funds.

KickCoin uses the Ethereum network and smart contracts for users to setup campaigns for others to donate money to. Creators of the Campaigns, known as managers, can then create requests that will specify how much money is going to what address for what purpose, and then contributors to the project will then be able to approve the request.

# Demo Reel

<div align="center">
<figure>
<img src="./demo_reel/home_screen.png">
<figcaption>Home page of KickCoin: Here one can view a summary of all the campaigns on the site as well as access the nav bar and create a campaign button</figcaption>
</figure>
<figure>
<img src="./demo_reel/create_campaign.png">
<figcaption>Create a Campaign page allows users to create a Campaign while setting a minimum contribution value. After the button is selected it will trigger MetaMask to create a Transaction</figcaption>
</figure>
<figure>
<img src="./demo_reel/single_campaign.png">
<figcaption>Single Campaign View, gives a summary of the campaign as well as access to contribute to the campaing and view requests associated to that campaign</figcaption>
</figure>
<figure>
<img src="./demo_reel/requests_page.png">
<figcaption>View Requests Page shows all the requests associated to the specific campaign and their status.</figcaption>
</figure>
<figure>
<img src="./demo_reel/new_requests.png">
<figcaption>Create Request page allows managers to create a request that will be voted on by contributors</figcaption>
</figure>
<figure>
<img src="./demo_reel/error_handling.png">
<figcaption>Error handling, specifcially showing an invalid address</figcaption>
</figure>
</div>

# Installing KickCoin

## Prerequisites:

- You have installed the latest version of Node.
- You have a Windows/Linux/Mac machine.
- You have read the following setup information.
- You have **MetaMask** as a browser extention
- You have created an account for MetaMask

Begin by navigating to the project directory and entering the following command.

```
npm install
```

switch to the beforeProduction branch by using

```
git checkout beforeProduction
```

## Generating the Secrets Part I

> Note: if you are looking to just access the demo contract please contact me in any of the methods at the end of this file. I will happily provide you the contract address for you :)

There are a few steps in setting up both your account and this project for personal deployment of this contract.

First you will want to get access to a node in which to deploy your contract, my recommended way of doing that is by using infura.io. There you will do the following:

- Create an infura account
  - Accept the confirmation email that is sent to you
- Navigate to your dashboard at infura.io/dashboard
- Create a new Project
  - Name of this project is not relevant
- Find the "Endpoint" dropdown selector and choose Rinkeby to deploy on the test network.
- Grab the first link below that dropdown that begins with https

Inside the ethereum directory create a file called `secrets.js` and fill it with both the infura link that you just copied as well as your twelve word mnemonicKey for your MetaMask account.

```javascript
const mnemonicKey = "Your key goes here and should be twelve words";

const infuraLink = "https://rinkeby.infura.io/v3/placeyourlinkhere";

module.exports = { mnemonicKey, infuraLink };
```

## Compile and Deploy

After the secrets.js file is created within the ethereum directory and you have filled and saved the required information we can then compile and deploy the smart contract

navigate to inside the ethereum directory and run the follwing command:

```
node compile.js
```

After a short while you will see a new folder built within the ethereum directory called 'build', this has compiled the smart contract within the contracts folder using the solidity compiler (solc) into a readable form by both the ethereum blockchain as well as for us to use in our Javascript later.

Next up we are going to deploy our contract to the test network.

from within the ethereum directory run the following command:

```
node deploy.js
```

This will start the process of deploying the contract to the Rinkeby Test Network, this process should take about 15 seconds to complete. After the process is over grab the address that is printed in the console explaining that our contract was deployed to '0x00000000000...'

## Generating the Secrets Part II

Once you have the address from the deploy.js command create a file inside the root directory again called `secrets.js`, and fill it with the following code:

```javascript
// fill with the address that was generated before
const deployedAddress = "0x00000000000000000000000000";

module.exports = { deployedAddress };
```

## We are Ready

After generating both secret.js files then we are finally ready to show the site and information on our browser. From the root directory you can run the command:

```
npm run dev
```

This will start up our next.js server (likely on localhost:3000) and allow us to access and interact with various aspects of the deployed contract.

## Appendix

If you are confused about the placement of the secrets.js or want to see what the file structure is supposed to look like:

<div align="center">
<img src="./demo_reel/folder_Structure.png">
</div>

The first secrets.js is from Part I, and the second secrets.js is from Part II

# Contact:

If you want to contact me you can find me on:

- [LinkedIn](https://www.linkedin.com/in/codyswithenbank/ "LinkedIn")
- [Github](https://github.com/cswithen "Github")

Also checkout my documentation/wiki on [Notion](https://cody-swithenbank.notion.site/KickCoin-Ethereum-Kickstarter-ce6839e6fd1a4bf0845441ca4f606b40 "Notion") for more details about the code!
