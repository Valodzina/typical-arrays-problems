
exports.min = function min (array) {

  if (array === null||array===undefined)
  return 0;
  let res=0;
  if (array.length >0) res= array[0];
  for (let i =0; i<array.length; i++)
  {
    if ( array[i]<res) 
    res= array[i];
  }

  return res;
}

exports.max = function max (array) {
  if (array === null||array===undefined)
  return 0;
  let res=0;
  if (array.length >0) res= array[0];
  for (let i =0; i<array.length; i++)
  {
    if ( array[i]>res) 
    res= array[i];
  }

  return res;
}

exports.avg = function avg (array) {
  if (array === null||array===undefined)
  return 0;
  let res=0;

  for (let i =0; i<array.length; i++)
  {
    res += array[i];
  }


if (array.length!=0)
{
res/=array.length;
return res;
}
else return 0;


}
