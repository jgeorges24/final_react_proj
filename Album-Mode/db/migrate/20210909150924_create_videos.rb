class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      
      t.string :song
      t.string :director
      t.string :cover_art
      t.string :rapper

      t.timestamps
    end
  end
end
