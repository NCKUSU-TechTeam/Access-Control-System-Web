#include<stdio.h>
#include<wiringPi.h>

#define LED 7

int main(void)
{
    printf("Access Control receive the signal!\n");

    wiringPiSetup();
    pinMode(LED,OUTPUT);
    printf("Now shut down the gate.\n");

    digitalWrite(LED,LOW);

    return 0;
}
