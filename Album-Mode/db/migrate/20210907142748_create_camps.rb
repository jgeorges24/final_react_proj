class CreateCamps < ActiveRecord::Migration[6.1]
  def change
    create_table :camps do |t|
      t.string :name

      t.timestamps
    end
  end
end
