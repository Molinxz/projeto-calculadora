class Calculador {
    constructor() {
        // Aqui é a propriedade que recebe os valores digitados pelo usuário
        this.displayValue = "";
    }

    //TODO: Este método adiciona valores á propriedades displayValue e em seguida chama um método updatDisplay para atualizar o visor (input).
    appendToDisplay(value) {
        this.displayValue += value;
        this.updateDisplay()
    }

    //TODO: Este método atualiza o visor (input) com os valores que o usuário digitou.
    updateDisplay() {
        document.getElementById("displayContent").value = this.displayValue;
    }

    // TODO: Este método limpa os valores do displayValue (input) e chama o método updateDisplay para atualizar o visor (input).
    clearDisplay() {
        this.displayValue = "";
        this.updateDisplay();
    }

    calculate() {
        try {
            const result = eval(this.displayValue);
            this.displayValue = result;
            this.updateDisplay();
        } catch (error) {
            this.displayValue = "Error";
            this.updateDisplay();
        }
    }
}

// Instanciando o objeto
const calculador = new Calculador();