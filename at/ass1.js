class Plant {
    constructor(name, height, waterLevel) {
      this.name = name;
      this.height = height;
      this.waterLevel = waterLevel;
    }
    grow(amount) {
      this.height += amount;
    }
    water(amount = 10) {
      this.waterLevel += amount;
    
      if (this.waterLevel > 100) {
        this.waterLevel = 100; 
        console.log("Warning: Too much water! Overflowed.");
      }
    }
    status() {
      console.log(`${this.name} is ${this.height} cm tall with a water level of ${this.waterLevel}.`);
    }
  
    wilt() {
      if (this.waterLevel < 20) {
        this.height -= 10; 
        console.log(`${this.name} has wilted due to low water level. Height reduced by 10 cm.`);
      }
    }
  }
 
  const fern = new Plant("Fern", 30, 50);
  fern.grow(10);  
  fern.water();   
  fern.status();  
  fern.water(50); 
  fern.status();  
  fern.water(10); 
  fern.status(); 
  fern.waterLevel = 10; 
  fern.wilt();   
  fern.status(); 
  