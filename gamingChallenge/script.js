class Fighter {
    constructor(name, health, damagePerAttack) {
      this.name = name;
      this.health = health;
      this.damagePerAttack = damagePerAttack;
    }
  
    attack(opponent) {
      opponent.health -= this.damagePerAttack;
    }
  }
  
  function declare_winner(fighter1, fighter2, firstAttacker) {
    let attacker, defender;
  
    if (fighter1.name === firstAttacker) {
      attacker = fighter1;
      defender = fighter2;
    } else {
      attacker = fighter2;
      defender = fighter1;
    }
  
    while (true) {
      attacker.attack(defender);
      if (defender.health <= 0) {
        return attacker.name;
      }
  
      // Swap roles
      [attacker, defender] = [defender, attacker];
    }
  }
  
  // Пример использования
  const fighter1 = new Fighter("Lew", 10, 2);
  const fighter2 = new Fighter("Harry", 2, 4);
  
  console.log(declare_winner(fighter1, fighter2, "Harry"));