import Phaser from "phaser";
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin";
import MainScene from "./src/MainScene";
import InventoryScene from "./src/scenes/InventoryScene";

const config = {
  width:512,
  height:512,
  backgroundColor: '#999999',
  type: Phaser.AUTO,
  parent: 'App',
  scene:[MainScene, InventoryScene],
  scale: {
    zoom:2,
  },
  physics: {
    default: 'matter',
    matter: {
      debug:false,
      gravity:{y:0},
    }
  },
  plugins: {
    scene:[
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision'
      }
    ]
  }
}

new Phaser.Game(config);