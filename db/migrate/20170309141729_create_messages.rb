class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :user
      t.string :text

      t.timestamps
    end
  end
end
