## User
User_ID
FirstName
LastName
Username
Email
Password

## Image
Img_ID
Image URL (S3)

## Comments
Comment_ID
Constraints: serial primary
Content (Comment)
Constraints: text, not-null, a certain set amount of characters.  
User_ID (Foreign Key)
Img_ID  (Foreign Key)

## Post
Post_ID
Img_ID (Foreign Key)
User_ID (FK)

## Tags
Tag_ID
Keyword (Tag)

## Pivot Table
ID
Tag_ID
Post_ID
