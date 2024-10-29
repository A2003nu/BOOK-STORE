import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";

const UploadBooks = () => {
  const bookCategories=[
    "Romance",
    "Fiction","Fanasty","Mystery","Horror","Children Books","Programming","Travel"
  ]

  const [selectedBookCategory,setSelectedBookCategory]=useState([0]);

  const handleChangeSelectedValue =(event)=>{
    setSelectedBookCategory(event.target.value)
  }

  const handleBookSubmit = (event)=>{
    event.preventDefault();
    const form=event.target;

    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;

    const bookObj={
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
   fetch("http://localhost:3000/upload-book",{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(bookObj)
   }).then(res=>res.json()).then(data=>{
    alert("Successfully Uploaded!!!!!");
    form.reset();
   })


  }
  return (
   <div className="px-4 my-12">
    <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

    <form onSubmit={handleBookSubmit} className="flex lg:w-[1100px] flex-col flex-wrap gap-4">
      <div className="flex gap-8">
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author name" required />
      </div>
     
      </div>

      <div className="flex gap-8">
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book name url" required />
      </div>
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
      <Label htmlFor="inputState" value="Book Category" />
      </div>
      <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
        {
          bookCategories.map((option)=> <option key={option} value={option}>{option}</option>)
        }
      </Select>
      </div>
     
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" placeholder="Write your book decription... " required rows={5} className='w-full' />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="book pdf url" required shadow />
      </div>
<div className='flex justify-center'>
      <Button type="submit" className='mt-4 px-4 w-1/5  '>Upload</Button></div>
    </form>

   </div>
  )
}

export default UploadBooks