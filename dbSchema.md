# Database Schema

## User
- User_ID
  * Type: integer
  * Constraints: serial primary
- FirstName
  * Type: text
  * Constraints: no special characters
- LastName
  * Type: text
  * Constraints: no special characters
- Username
  * Type: text
  * Constraints: at least 5 characters, unique, not-null
- Email
  * Type: text
  * Constraints: unique, not-null
- Password
  * Type: text
  * Constraints: one cap letter, one symbol, and minimum of 8 characters

## Image
- Img_ID
  * Type: integer
  * Constraints: serial primary
- Image URL (S3)
  * Type: text
  * Constraints: not-null, unique

## Comments
- Comment_ID
  * Type: integer
  * Constraints: serial primary
- Content (Comment)
  * Type: text
  * Constraints: not-null, a certain set amount of characters
- User_ID (Foreign Key)
- Img_ID  (Foreign Key)

## Post
- Post_ID
  * Type: integer
- Img_ID (Foreign Key)
- User_ID (FK)

## Tags
- Tag_ID
  * Type: integer
- Keyword (Tag)   
  * Type: text
  * Constraints: not-null

## Pivot Table
- ID
  * Type: integer
- Tag_ID
- Post_ID
