
//node app -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"


const isConfigValid = (data) =>{
const [,config,,,,,,] = data;
    console.log(config);
for(let i = 0;i<config.length;++i){
    if(config[i] == "C" || config[i] == "R"){
        if(config[i+1] != 0 || config[i+1] != 1){
            process.stderr.write("Lose 1 or 0");
        }
    }
     if(config[i] == "A"){
        if(config[i+1] != "-" || config[i+1] !=""){
            process.stderr.write("A doesn't require key")
        }
    }
}
}


isConfigValid(process.argv.slice(2));