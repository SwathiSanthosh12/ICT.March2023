
    function time(s){
        
        s = s.split(':');
        let a = s[0];
        s.pop(s[2]);
        s.push('30','PM');
        
        // s = s.push('30','PM');
        // console.log(s);
        // var a = s[0];
        // let b = s[2],
        
        // a = Number(a);
        // a = 12 + a;
        if(s[3] == 'PM'){
            a = 12+ Number(a);
            
        }
      
        let z = (a +': '+s[1]+ ' : ' + s[2]);
        z = z.toString(z);
        console.log(z);

    }
    time('20:8:30 PM')
    
