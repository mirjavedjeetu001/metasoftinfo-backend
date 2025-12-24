export class CreateTeamMemberDto {
  name: string;
  designation: string;
  category: string;
  imageUrl: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  bio?: string;
  displayOrder?: number;
  isActive?: boolean;
}
