import { BinaryTreeNode, drawBinaryTree } from "binary-tree-visualizer"

const root = new BinaryTreeNode(6)
root.left = new BinaryTreeNode(4)
root.left.left = new BinaryTreeNode(3)
root.left.right = new BinaryTreeNode(5)
root.right = new BinaryTreeNode(8)

drawBinaryTree(root, document.querySelector("canvas"))


function dfsDeserialze(root, res) {
  if (!root) {
    res.push("x")
    return
  }
  res.push(root.value)
  dfsDeserialze(root.left, res)
  dfsDeserialze(root.right, res)
}

function deserializeTree(root) {
  const res = []
  dfsDeserialze(root, res)
  return res.join(" ")
}

//TODO: Serialize Tree again

const deserializedTree = deserializeTree(root)

const deserializeElement = document.querySelector("#js-deserialize")
deserializeElement.innerHTML = `Deserialized string: ${deserializedTree}`

