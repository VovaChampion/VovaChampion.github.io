export const myProjects = [
  {
    id:1,
    slug:'OnlineShop',
    name: 'Online Shop',
    tools: [ 'HTML, CSS', 'Javascript', 'PHP', 'Bootstrap 4', 'API', 'Stripe', 'MySQLWorkbench','XAMPP', 'Trello', 'GitHub', 'Toggl', 'Balsamiq Wireframes'],
    description: 'Created an online store with several functional pages and the opportunity to choose a product and buy it via Stripe. The shop has been written from scratch to the working site with access to a database to save the data about purchase orders and products.',
    image: 'onlineShop',
    git: 'https://github.com/VovaChampion/Online_shop'
  },
  {
    id:2,
    slug:'SmartWallet',
    name: 'iOS App',
    tools: [ 'HTML, CSS', 'React Native', 'Redux', 'Redux Persist', 'GitHub', 'EXPO', 'Trello', 'Android Studio'],
    description: 'Created an iOS App "SmartWallet" manage your budget. Purpose: to store all expenses by categories and months. Ability to set a monthly limit.',
    image: 'smartWallet',
    git: 'https://github.com/VovaChampion/smart-wallet'
  },
  {
    id:3,
    slug:'Magento',
    name: 'Magento 2',
    tools: [ 'HTML, CSS', 'Javascript', 'PHP', 'Magento 2', 'GitHub'],
    description: 'Created a web-shop with Magento 2',
    image: 'magento',
    git: 'https://github.com/VovaChampion/magento_project'
  },
  {
    id:4,
    slug:'BusTicket',
    name: 'Bus Ticket system',
    tools: [ 'HTML, CSS', 'Javascript', 'PHP', 'MySQLWorkbench', 'XAMPP', 'Trello', 'GitHub'],
    description: 'Created a site "Sell the bus tickets" and deploy it. Admin can manage tickets in Database (CRUD). Visitors can buy and use tickets. There is a possibility to validate tickets: check that the ticket is valid and/or the ticket has not been used before.',
    image: 'busTicket',
    git: 'https://github.com/VovaChampion/Ticket_System'
  },
  {
    id:5,
    slug:'Pastebill',
    name: 'Pastebill',
    tools: [ 'HTML, CSS', 'React', 'Node.js', 'GitHub', 'Contentful', 'heroku', 'API'],
    description: 'PasteBill is a Business-to-Business (B2B) web-platform.',
    image: 'pastebill',
    git: 'https://pastebill.com/'
  },
  {
    id:6,
    slug:'BookSystem',
    name: 'Book system',
    tools: [ 'PHP', 'HTML, CSS', 'Javascript', 'GitHub', 'API', 'Stripe'],
    description: 'Created a web-page that, for a fee (using Stripe), provides supplement to book information. The user has the ability to upload a CSV file containing ISBNs. The application calls an API and retrieves information about each book using its ISBN. The application creates a new CSV file containing all available information about the books and provide a link to the file for the user.',
    image: 'bookSystem',
    git: 'https://github.com/VovaChampion/Book_system'
  }
]


export const skils = [{
  id:1,
  label: "HTML/CSS/Bootstrap",
  value:4
}, {
  id:2,
  label: "JavaScript, TypeScript",
  value:4
},{
  id:3,
  label: "React/React Native",
  value:4
},{
  id:4,
  label: "PHP",
  value:4
},{
  id:5,
  label: "SQL (MySQLWorkbench)",
  value:4
}]


export default {
  myProjects, skils
}
