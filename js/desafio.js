const grupoUno = ["Javier", "Guts", "Takezo", "Rolando", "Manuel"]

function preguntar() {
    let preguntaUno = confirm('¡Hola! ¿Te gustaría conocer a mis amigos?')
    if (preguntaUno){
        let last = grupoUno.pop();
        wannaJoin = confirm(`Mis amigos son ${grupoUno.join(', ') + ' y '+ last}, ¿te gustaría unírtenos?`);
        if (wannaJoin){
            let tuNombre = prompt('Qué bueno! ¿Cómo te llamás?')
            grupoUno.push(tuNombre);
            let ultimo = grupoUno.pop();
            alert(`¡Ahora somos ${grupoUno.join(', ') + ' y '+ ultimo}! ¡Entre más mejor!`)
            }else {
                let insisUno = confirm("¿Seguro que no quieres?")
                if (insisUno){
                    let tuNombre = prompt('Qué bueno! ¿Cómo te llamás?')
                    grupoUno.push(tuNombre);
                    let ultimo = grupoUno.pop();
                    alert(`¡Ahora somos ${grupoUno.join(', ') + ' y '+ ultimo}!¡Entre más mejor!`)
                }
                else {
                    alert('¡Qué pena! Podés volver a hablar escribiendo salduar() en la consola')
                }
            }     
        }else {
            let insisDos = confirm('¡Vamos! Son muy buenas personas, ¿no quierés conocerlos?');
            if(insisDos){
                preguntar()
            }else {
                alert('¡Qué pena! Podés volver a hablar escribiendo salduar() en la consola');
            }
        }  
    }
preguntar();