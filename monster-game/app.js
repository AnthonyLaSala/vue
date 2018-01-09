new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calcDamage(5, 10);            
            this.monsterHealth -= damage;            
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.checkWin()){
                return;
            }
            this.monsterAttack();
            this.checkWin();

        },
        spAttack: function () {
            var damage = this.calcDamage(0, 20);
            this.monsterHealth -= damage;
            if (this.checkWin()){
                return;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            });
            this.monsterAttack();
            this.checkWin();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 20;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 20'
            });
            this.monsterAttack();
            this.checkWin();
        },
        giveUp: function () {
            if (confirm('You lose! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
        },
        monsterAttack: function(){
            var damage = this.calcDamage(5, 25);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });
        },
        calcDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0){
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }            
        return false;
        }
        }
    
});
