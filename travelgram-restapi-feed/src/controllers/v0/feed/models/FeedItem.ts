import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class FeedItem extends Model<FeedItem> {
  @Column
  public destination!: string;

  @Column
  public country!: string;

  @Column
  public beenthere!: string;

  @Column
  public url!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
