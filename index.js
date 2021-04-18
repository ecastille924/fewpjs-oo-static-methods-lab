class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    string = string[0].toUpperCase() + string.slice(1);
    let strarray = string.split(" ");
    let smallwords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    for(let i = 0; i < strarray.length; i++){
      if(!(smallwords.includes(strarray[i]))){
        strarray[i] = strarray[i][0].toUpperCase() + strarray[i].slice(1);
      }
    }
    return strarray.join(" ");
  }
}