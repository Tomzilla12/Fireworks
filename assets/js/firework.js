class Firework {
    constructor(x, y) {
        this.color = {
            red: random(100, 255),
            green: random(100, 255),
            blue: random(100, 255),
            alpha: 255
        }
        this.firework = new Particle(x, y, random(-2, 2), random(map(height, 0, 1250, -3, -8), map(height, 0, 1250, -6, -16)), 0, 0, 20, this.color);
        this.exploded = false;
        this.dead = false;
        this.particles = [];
    }

    explode() {
        for (let x = 0; x < random(20, 50); x++) {
            let vel = p5.Vector.random2D().mult(random(0, 4));
            this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y,vel.x, vel.y, 0, 0, 5, this.color));
        }
    }

    update() {
        if (!this.exploded) {
            this.firework.applyBehaviors();
            this.firework.update();
            
            if (this.firework.vel.y > 0) {
                this.exploded = true;
                this.explode();
            }
        } else {
            for (let x = 0; x < this.particles.length; x++) {
                this.particles[x].applyBehaviors();
                this.particles[x].update();
                if (this.particles[x].toLive <= 0) {
                    this.particles.splice(x, 1);
                }
            }
            if (this.particles.length == 0) {
                this.dead = true;
            }
        }
    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        } else {
            for (let x = 0; x < this.particles.length; x++) {
                this.particles[x].show();
            }
        }
    }
}