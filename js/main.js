
        let foto = document.getElementById("foto");
        let nome = document.getElementById("name");
        let hp = document.getElementById("hp");
        let speed = document.getElementById("speed");
        let atk = document.getElementById("atk");
        let esp_atk = document.getElementById("esp_atk");
        let def = document.getElementById("def");
        let esp_def = document.getElementById("esp_def");
        let type1 = document.getElementById("type1");
        let type2 = document.getElementById("type2");
        let id = 1;
        let meuid = document.getElementById("id");

        function consultarPokemon(id){
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(function(response) {
                response.json()
                .then(function(pokemon){
                    criarPokemon(pokemon)
                })
            })
        } 

        function somar(){
            id++;
            consultarPokemons();
        }

        function dimin(){
            if(id>1){
                id--;
            }
            
            consultarPokemons();
        }

        function consultarPokemons(){            
            consultarPokemon(id);           
        }


        function criarPokemon(pokemon){
            const pokemonTratado = tratarPokemon(pokemon);
            foto.setAttribute("src", pokemon.sprites.front_default)
            // meuid.setAttribute("value", id)
            nome.innerText = (pokemonTratado.name+' ('+id+'/807)')
            hp.innerText = (pokemonTratado.hp)
            speed.innerText = (pokemonTratado.speed)
            atk.innerText = (pokemonTratado.attack)
            esp_atk.innerText = (pokemonTratado.special_attack)
            def.innerText = (pokemonTratado.defense)
            esp_def.innerText = (pokemonTratado.special_defense)
            
            if(pokemon.types.length < 2){
                type1.innerText = (pokemon.types[0].type.name)
                type2.innerText = ("")
            }else{
                type1.innerText = (pokemon.types[0].type.name)
                type2.innerText = (pokemon.types[1].type.name)
            }
        }
        
        function tratarPokemon(pokemonJson){
            const pokemon = {
                name: pokemonJson.name,
                hp: pokemonJson.stats.filter((stats) => stats.stat.name.includes("hp"))[0].base_stat,
                speed: pokemonJson.stats.filter((stats) => stats.stat.name.includes("speed"))[0].base_stat,
                attack: pokemonJson.stats.filter((stats) => stats.stat.name.includes("attack"))[0].base_stat,
                special_attack: pokemonJson.stats.filter((stats) => stats.stat.name.includes("special-attack"))[0].base_stat,
                defense: pokemonJson.stats.filter((stats) => stats.stat.name.includes("defense"))[0].base_stat,
                special_defense: pokemonJson.stats.filter((stats) => stats.stat.name.includes("special-defense"))[0].base_stat
            }
            return pokemon;
        }

        consultarPokemons();        
        