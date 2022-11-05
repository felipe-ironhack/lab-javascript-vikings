// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health,
	  this.strength = strength;
	}

	attack() {
		return this.strength;
	}

	receiveDamage(damage) {
		this.health -= damage;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength){
		super(health, strength)
		this.name = name
	}

	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) return `${this.name} has received ${damage} points of damage`

		if (this.health <= 0) return `${this.name} has died in act of combat`
	}

	battleCry(){
		return "Odin Owns You All!"
	}

}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage){
		this.health -= damage;

		if (this.health > 0) {
			return 'A Saxon has received ' + damage + ' points of damage'
		} else { 
			return "A Saxon has died in combat"
		}
	}

}

// War
class War {
	constructor(){
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	addViking(newViking){
		this.vikingArmy.push(newViking)
	}

	addSaxon(newSaxon) {
		this.saxonArmy.push(newSaxon)
	}

	getRandom(army){
		return Math.floor(Math.random() * army.length)
	}

	vikingAttack(){
		const randomViking = this.vikingArmy[this.getRandom(this.vikingArmy)]

		const saxonIndex = this.getRandom(this.saxonArmy)
		const randomSaxon = this.saxonArmy[saxonIndex]

		const result = randomSaxon.receiveDamage(randomViking.attack())

		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(saxonIndex, 1)
		}

		return result
	}

	attack(attackingArmy, defendingArmy){
		const randomAttacker = attackingArmy[this.getRandom(attackingArmy)]

		const defenderIndex = this.getRandom(defendingArmy)
		const randomDefender = defendingArmy[defenderIndex]

		const result = randomDefender.receiveDamage(randomAttacker.attack())

		if (randomDefender.health <= 0) {
			defendingArmy.splice(defenderIndex, 1)
		}

		return result
	}

	saxonAttack(){
		return this.attack(this.saxonArmy, this.vikingArmy)
	}

	showStatus(){

		if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
		
		if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
		
		return "Vikings and Saxons are still in the thick of battle."
	}

}
