#include <stdio.h>
#include <wiringPi.h>

// Check out the id by `gpio readall`, and using wPi as id.
#define LED 7

int main(void)
{
    printf("Access Control receive the signal!\n");

    wiringPiSetup();
    pinMode(LED,OUTPUT);

    printf("Prepare to open the gate !\n");
    // Turn on the GPIO, open the gate.
    digitalWrite(LED,HIGH);

    return 0;
}
