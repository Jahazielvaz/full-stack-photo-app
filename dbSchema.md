# Database Schema

## User
- User_ID
- FirstName
- LastName
- Username
  * Type: text
  * Constraints: at least 5 characters, unique, not-null
- Email
- Password

## Image
- Img_ID
- Image URL (S3)
  * Type: text
  * Constraints: not-null, unique

## Comments
- Comment_ID
  * Constraints: serial primary
- Content (Comment)
  * Type: text
  * Constraints: not-null, a certain set amount of characters
- User_ID (Foreign Key)
- Img_ID  (Foreign Key)

## Post
- Post_ID
- Img_ID (Foreign Key)
- User_ID (FK)

## Tags
- Tag_ID
- Keyword (Tag)   
  * Type: text
  * Constraints: not-null

## Pivot Table
- ID
- Tag_ID
- Post_ID
