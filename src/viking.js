// Soldier
class Soldier {
	constructor(health, strength) {
		(this.health = health), (this.strength = strength);
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
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}

	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) return `${this.name} has received ${damage} points of damage`;

		if (this.health <= 0) return `${this.name} has died in act of combat`;
	}

	battleCry() {
		return 'Odin Owns You All!';
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) return `A Saxon has received ${damage} points of damage`;

		if (this.health <= 0) return 'A Saxon has died in combat';
	}
}

// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	addViking(newViking) {
		this.vikingArmy.push(newViking);
	}

	addSaxon(newSaxon) {
		this.saxonArmy.push(newSaxon);
	}

	getRandomViking() {
		return Math.floor(Math.random() * this.vikingArmy.length);
	}

	getRandomSaxon() {
		return Math.floor(Math.random() * this.saxonArmy.length);
	}

	vikingAttack() {
		const randomViking = this.vikingArmy[this.getRandomViking()];

		const saxonIndex = this.getRandomSaxon();
		const randomSaxon = this.saxonArmy[saxonIndex];

		const result = randomSaxon.receiveDamage(randomViking.attack());

		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(saxonIndex, 1);
		}

		return result;
	}

	saxonAttack() {
		const randomSaxon = this.saxonArmy[this.getRandomSaxon()];
		const vikingIndex = this.getRandomViking();
		const randomViking = this.vikingArmy[vikingIndex];

		const result = randomViking.receiveDamage(randomSaxon.attack());

		if (randomViking.health <= 0) {
			this.vikingArmy.splice(vikingIndex, 1);
		}

		return result;
	}

	showStatus() {
		if (!this.vikingArmy.length)
			return 'Saxons have fought for their lives and survived another day...';

		if (!this.saxonArmy.length) return 'Vikings have won the war of the century!';

		return 'Vikings and Saxons are still in the thick of battle.';
	}
}
