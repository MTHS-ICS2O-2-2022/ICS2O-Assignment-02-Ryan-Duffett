// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ryan Duffet
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length').value)
  const width = parseInt(document.getElementById('width').value)

  // process
  const area = length * width

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}