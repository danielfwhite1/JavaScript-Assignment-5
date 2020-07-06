class Wine {
    constructor(name, type, description, price) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
    }

    describe() {
        return `${this.name}: 
            A ${this.type} wine
            ${this.description}`;
    }
}

class Menu {
    constructor() {
        this.wines = [];
    }

    start() {
        let selection = this.mainMenu();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createWine();
                    break;
                case '2':
                    this.viewRedWine();
                    break;
                case '3':
                    this.viewWhiteWine();
                    break;
                case '4':
                    this.displayAllWine();
                    break;
                case '5':
                    this.deleteWine();
                    break;
                default:
                    selection = 0;
            }
            selection = this.mainMenu();
        }

        alert('Goodbye!');
    }

    mainMenu() {
        return prompt(`
            0) Exit
            1) Add wine to menu
            2) View red wine selection
            3) View white wine selection
            4) Display all wine
            5) Delete wine
        `);
    }

    createWine() {
        let name = prompt('Enter the name of the wine (Ex: Pinot Noir):');
        let type = prompt('Enter the type of the wine (Red/White):');
        let description = prompt('Enter a description of the wine (Ex: Santa Barbara Winery):');
        let price = prompt('Enter the price of the wine:');
        this.wines.push(new Wine(name, type, description, price));
    }

    viewRedWine() {
        let redWineString = '';
        for (let i = 0; i < this.wines.length; i++) {
            if (this.wines[i].type == 'Red') {
                redWineString += `${i}) ${this.wines[i].name}
                    Description: ${this.wines[i].description}
                    Price: $${this.wines[i].price} per glass.
                    ` + '\n';
            }
        }
        alert(redWineString);
    }

    viewWhiteWine() {
        let whiteWineString = '';
        for (let i = 0; i< this.wines.length; i++) {
            if (this.wines[i].type == 'White') {
                whiteWineString += `${i}) ${this.wines[i].name}
                    Description: ${this.wines[i].description}
                    Price: $${this.wines[i].price} per glass.
                    ` + '\n';
            }
        }
        alert(whiteWineString);
    }

    displayAllWine() {
        let wineString = '';
        for (let i = 0; i < this.wines.length; i++) {
                wineString += `${i}) ${this.wines[i].name}
                    Type: ${this.wines[i].type} wine
                    Description: ${this.wines[i].description}
                    Price: $${this.wines[i].price} per glass.
                    ` + '\n';
        }
        alert(wineString);
    }


    deleteWine() {
        let index = prompt(`Enter the index of the wine you wish to delete:`);
        if (index === '') {
            return;
        } else if (index > -1 && index < this.wines.length) {
            this.wines.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();