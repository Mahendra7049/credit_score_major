import React from 'react'
import '../CSS/help.css'
export const HelpCenter = () => {
  return (
  <>
  <div class="container">
  <div class="row">
  <div class="col-md-6">
    <h1>Let's get you some help!</h1>
    <h6>Have any issue? Send us an <span class="email-us">email.</span></h6>
    <div class="img-wrapper">
    <img src="https://i.ibb.co/bWfN3Qy/undraw-onboarding-o8mv-1.png" alt="undraw-onboarding-o8mv-1" border="0"/>
      </div>
  </div>
  
  <div class="col-md-6">
    <form>
  <div class="form-group">
    <label for="list">What list are you looking for ?</label>
    <input type="text" class="form-control" id="list" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <label for="tags">Please Few Primary Tags ?</label>
    <input type="text" class="form-control" id="tags"/>
  </div>
      
    <div class="form-group">
    <label for="describe">Please desribe your list needs ?</label>
    <textarea type="text" class="form-control" id="describe" rows="5"></textarea>
  </div>
      
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select Category</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
            
<button type="button" class="btn btn-primary"><span>Submit</span> <i class="fas fa-long-arrow-alt-right"></i></button>
</form>
  </div>
    
  </div>
  </div>

  </>
  )
}
