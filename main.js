            var images = ["191-1917063_small", "gg.PNG" , "ARSH.jpg"]; 
            var names = ["Fmaily Book","Purna Shrestha","Poonam Shrestha","Ars Shrestha"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 4
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
