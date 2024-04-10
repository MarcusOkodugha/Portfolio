
main(){

    while(!q){
        event = getKeyEvent();
        for(int i = 0; i < 6; i++){
            if(event == 'w'){
                moveForward(50);
            }
            
        }

}


function moveForward(int len){
    plyer.x = player.x;
    plyer.y = player.y + len;

}