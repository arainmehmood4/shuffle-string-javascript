var swape=function(s,indices)
{
  //convert string to array
  var str=s.split("");
  for(var i=0; i<indices.length; i++)
      {
          for(var j=i+1; j<indices.length; j++)
              {
                  if(indices[i] > indices[j])
                      {
                        //swape indices
                          var temp=indices[j];
                          indices[j]=indices[i];
                           indices[i]=temp;
                        
                        //swape string
                        var tem_s=str[j];  
                          str[j]=str[i];
                          str[i]=tem_s;
                      }
              }
      }
  //return string after convert array to string
    return str.join("");
}
console.log(swape("codeleet",[4,5,6,7,0,2,1,3]));
