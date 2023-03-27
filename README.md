# Eye Guide

## About the project

This is a project to develop a indoor navigation application for the visually impaired. A person can map out a building from anywhere using Google Maps and a Android phone/tablet. Then a visually imparied user can use the Android OS Accessibility Talk Back feature programmed into their device to navigate the application to select the building they are in, starting room location, and destination room location. The mobile application will then provide audio instructions to the user to navigate them throughout the building by detecting distance travelled using pedometer to count steps and determining bearing using magnotometer. 

Additionally, their is a hardware component created that can be mounted to a user's mobild device that contains a libar to detect object infront of the user during navigation. If an object is detected within 2m, the device would vibrate indicating a warning to the user. 

## Goal of Eye Guide

The overall goal of this project is to develop a mobile application that will allow a visually imparied user to navigate a building, such as malls, hospitals, and schools, with minimal to no hardware and at a low and affordable cost. With successful accomplishment of this goal, integration with Google Maps outdoor navigation for the visually impaired can allow a visually imparied user to both navigate themselves to a building and within the building.

## Project Structure

- React Native for the mobile interface (JavaScript)
- Django for the backend interface (Python)
- Postgres SQL for the database architecture
- Arduino to program the Arduino Nano BLE used to take input from the lidar device

### Current collaborators

After March 2023, this project will be continued by Girujan Naguleswaran and will potentially be set to be worked in a open source perspective. This repo is considered the main repo for the continuation of the project and will be continued to be developed with assistance from people with visually impariments.
