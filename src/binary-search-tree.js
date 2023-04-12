const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.x = null;
  }
  root() {
    return this.x;
  }

  add(data) {
    var newNode=new Node(data);
    if (this.x === null)
      this.x=newNode;
    else
      this.addNode(this.x, newNode);
  }
  addNode(node, newNode){
    if(newNode.data<node.data){
      if(node.left===null)
        node.left=newNode;
      else
        this.addNode(node.left, newNode);
    }
    else{
      if(node.right===null)
        node.right=newNode;
      else
        this.addNode(node.right, newNode);
    }
  }
  
  has(data) {
    let current = this.x;
    while(current){
      if (data === current.data){
        return true;
      }
      if (data<current.data){
        current=current.left;
      }else{
        current=current.right;
      }
    }
    return false;
  }

  find(data) {
    let current=this.x;

    while(current.data !== data){
      if(data<current.data){
        current=current.left
      }else{
        current=current.right;
      }
      if(current === null){
        return null;
      }
    }
    return current;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if(node==null){
        return null;
      }
      if (data == node.data){
        if(node.left == null && node.right == null){
          return null;
        }
        if (node.left==null){
          return node.right;
        }
        if(node.right==null){
          return node.left;
        }
        var tempNode=node.right;
        while(tempNode.left !== null){
          tempNode=tempNode.left;
        }
        node.data=tempNode.data;
        node.right=removeNode(node.right, tempNode.data);
        return node;
      }else if(data<node.data){
        node.left=removeNode(node.left, data);
        return node;
      }else{
        node.right=removeNode(node.right, data);
        return node;
      }
    }
    this.x=removeNode(this.x, data);
  }

  min() {
    if (!this.x){
      return;
    }
    let node=this.x;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.x){
      return;
    }
    let node=this.x;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}



module.exports = {
  BinarySearchTree
};