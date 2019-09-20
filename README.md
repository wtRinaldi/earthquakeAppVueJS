# Earthquakes Vue.js

# USGS Earthquake Application

see the source files at https://github.com/wtRinaldi/earthquakeAppVueJS

## Description

Application to quickly display the top ten earthquake locations and intensities by utilizing data from the USGS api on earthquakes to display the top ten earth quake locations and intensities. 

## Features

- show earthquake location and provide regional earthquake history.

## Installation

The application can been found at:

## Frameworks & Libraries
	
	- Vue.js
	- Leaflet.js & Mapbox
	- Tailwind.css
	  Storybook.ui

## Design Pattern

Component based front end and REST api architecture.  Components are managed in Storybook.ui

## APIs

* 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=' + today + '&minmagnitude=1&orderby=magnitude&limit=10'
	- get list of 10 largest earthquakes today

* 'https://earthquake.usgs.gov/ws/geoserve/regions.json?latitude=' + lat + '&longitude=' + lng
	- get regional earthquake history at a given earthquake location

## Contact

williamtrinaldi@gmail.com

