class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.string :genre
      t.string :description
      t.belongs_to :writer, foreign_key: true

      t.timestamps
    end
  end
end
