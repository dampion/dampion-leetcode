class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // insert(val, node = this.root) {
  //   const newNode = new Node(val)
  //   if (!this.root) {
  //     this.root = newNode
  //     return this
  //   }

  //   let currentNode = this.root
  //   while (currentNode) {
  //     if (val === currentNode.val) return undefined
  //     if (val > currentNode.val) {
  //       if (!currentNode.right) {
  //         currentNode.right = newNode
  //         return this
  //       }
  //       currentNode = currentNode.right
  //     } else {
  //       if (!currentNode.left) {
  //         currentNode.left = newNode
  //         return this
  //       }
  //       currentNode = currentNode.left
  //     }
  //   }
  // }
  insert(val) {
    const newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    this.insertHelper(val, this.root)
    return this
  }

  insertHelper(val, currentNode) {
    if (val === currentNode.val) return undefined
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new Node(val)
      } else {
        this.insertHelper(val, currentNode.left)
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new Node(val)
      } else {
        this.insertHelper(val, currentNode.right)
      }
    }
  }

  find(val){
    if(!this.root) return false
    
    /* iteration solution */
    // let currentNode=this.root
    // while(currentNode){
    //   if(currentNode.val===val) return currentNode
    //   if(val>currentNode.val) {
    //     currentNode = currentNode.right
    //   } else {
    //     currentNode=currentNode.left
    //   }
    // }
    // return false

    /* recursive solution */
    return findHelper(val, this.root)
  }

  findHelper(val,currentNode){
    if(!currentNode) {
      return false
    } else if(val===currentNode.val) {
      return currentNode
    } else if (val>currentNode.val) {
      this.findHelper(val, currentNode.right)
    } else {
      this.findHelper(val, currentNode.left)
    }
  }

  remove(val){
    if(val===null) return undefined
    this.root = this.removeHelper(val, this.root)
  }

  removeHelper(val, currentNode){
    if(!currentNode) return undefined
    if (val > currentNode.val) {
      currentNode.right = this.removeHelper(val, currentNode.right)
      return currentNode
    } else if (val < currentNode.val) {
      currentNode.left = this.removeHelper(val, currentNode.left)
      return currentNode
    }
    // (val===currentNode.val)
    if(!currentNode.left && !currentNode.right){
      currentNode=null
      return currentNode
    } else if (!currentNode.left) {
      // right child only
      currentNode = currentNode.right
      return currentNode
    } else if (!currentNode.right) {
      // left child only
      currentNode = currentNode.left
      return currentNode
    } else {
      // has two child
      let minRightChildNode=this.findMinValue(currentNode.right)
      currentNode.val=minRightChildNode.val
      currentNode.right=this.removeHelper(currentNode.val, currentNode.right)
      return currentNode
    }
  }

  findMinValue(node){
    if(node.left){
      return this.findMinValue(node.left)
    }

    return node
  }
}