class CreateSpirals < ActiveRecord::Migration
  def change
    create_table :spirals do |t|
      t.string :name
      t.string :image
      t.text :moves

      t.timestamps null: false
    end
  end
end
