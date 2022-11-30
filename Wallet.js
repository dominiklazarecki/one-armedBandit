class Wallet {
    constructor(money) {
        // 
        let _money = money
        //pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        //Sprawdzanie czy użytkownik ma odpowiednią ilość środnków
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }
        //  Zmiana wartośći portfela
        this.changeWallet = (value, type = "+") => {
            //  czy wartość jest typem number i czy nie jest not a number
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("nieprawidłowy typ działania")
                }
            } else {
                console.log(typeof value);
                throw new Error("nieprawidłowa liczba");
            }
        }
    }
}