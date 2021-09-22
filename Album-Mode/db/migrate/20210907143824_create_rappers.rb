class CreateRappers < ActiveRecord::Migration[6.1]
  def change
    create_table :rappers do |t|
      t.string :name
      t.integer :age, default: 0
      t.string :photo
      t.integer :zipcode, default: 0

      t.timestamps
    end
  end
end
