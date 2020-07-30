var kittens = ["Milo", "Otis", "Garfield"] //define your array here

<<<<<<< HEAD
function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}
 
 function destructivelyPrependKitten(name)
 {
   kittens.unshift(name)
   return kittens
 }


function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}


function appendKitten(name)
{
  return [...kittens, name]
}

function removeFirstKitten()
{
 return kittens.slice(1)
}
function prependKitten(name)
{
  return[name, ...kittens]
}

function removeLastKitten()
{
     return kittens.slice(0, 2)
 
}
=======
>>>>>>> fc2d68acddace0f5cf3aca51682327757bd4f6a9

// Add your functions and code here
