var swape=function(s,indices)
{
  var str=s.split("");
  for(var i=0; i<indices.length; i++)
      {
          for(var j=i+1; j<indices.length; j++)
              {
                  if(indices[i] > indices[j])
                      {
                          var temp=indices[j];
                          var tem_s=str[j];
                          
                          indices[j]=indices[i];
                          str[j]=str[i]
                          
                          indices[i]=temp;
                          str[i]=tem_s;
                      }
              }
      }
    return str.join("");
}
console.log(swape("codeleet",[4,5,6,7,0,2,1,3]));